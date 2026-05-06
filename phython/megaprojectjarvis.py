import os
os.environ["PATH"] += os.pathsep + r"C:\flac"

import speech_recognition as sr


r = sr.Recognizer()

with sr.Microphone() as source:
    print("Adjusting for background noise...")
    r.adjust_for_ambient_noise(source, duration=1)

    print("Speak something...")
    audio = r.listen(source)

try:
    text = r.recognize_google(audio, language="en-IN")
    print("You said:", text)

except sr.UnknownValueError:
    print("Could not understand audio")

except sr.RequestError as e:
    print("Google API error:", e)
