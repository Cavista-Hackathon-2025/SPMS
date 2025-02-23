from flask import Flask
from flask_socketio import SocketIO
import serial
import time

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

arduino = None  
try:
    arduino = serial.Serial("COM3", 9600, timeout=1)
    print("✅ Successfully connected to Arduino")
except Exception as e:
    print(f"❌ Error connecting to Arduino: {e}")

@app.route("/")
def index():
    return "Flask Server Running!"

def read_from_arduino():
    while True:
        try:
            if arduino and arduino.in_waiting > 0:
                data = arduino.readline().decode("utf-8").strip()
                
                # ✅ Check if the data is valid before emitting
                if "," in data:  
                    print(data)
                    socketio.emit("sensor_data", "29.30,76.00")
                else:
                    print("⚠️ Malformed data received:", data)
        except Exception as e:
            print(f"❌ Critical error: {e}")
            time.sleep(5)

if __name__ == "__main__":
    socketio.start_background_task(read_from_arduino)
    socketio.run(app, host="0.0.0.0", port=5000, debug=True)
