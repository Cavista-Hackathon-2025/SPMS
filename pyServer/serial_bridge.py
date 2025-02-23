from flask import Flask
from flask_socketio import SocketIO
import serial
import time

app = Flask(_name_)
socketio = SocketIO(app, cors_allowed_origins="*")

# ✅ Attempt to connect to the Arduino
try:
    arduino = serial.Serial("COM3", 9600, timeout=1)
    print("✅ Successfully connected to Arduino")
except Exception as e:
    arduino = None
    print(f"❌ Error connecting to Arduino: {e}")

@app.route("/")
def index():
    return "Flask Server Running!"

def read_from_arduino():
    while True:
        try:
            if arduino and arduino.in_waiting > 0:
                data = arduino.readline().decode("utf-8").strip()
                if "," in data:  # Ensure valid data
                    print(f"📡 Sending Data: {data}")
                    socketio.emit("sensor_data", data, broadcast=True)  # ✅ Emit immediately
                else:
                    print("⚠ Malformed data:", data)
        except Exception as e:
            print(f"❌ Error reading from Arduino: {e}")
            time.sleep(5)  # Wait before retrying

if _name_ == "_main_":
    socketio.start_background_task(read_from_arduino)
    socketio.run(app, host="0.0.0.0", port=5000, debug=True)