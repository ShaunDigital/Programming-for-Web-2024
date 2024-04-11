import mido
from mido import Message, MidiFile, MidiTrack
import random

# Define a mapping of words to MIDI notes
note_mapping = {
    'hello': 60,  # C4
    'world': 64,  # E4
    'music': 67,  # G4
    'example': 72  # C5
}

# Function to generate MIDI notes based on text input
def generate_midi(text):
    # Create a MIDI track
    track = MidiTrack()

    # Set initial time
    time = 0

    # Split the text into words
    words = text.lower().split()

    # Generate MIDI notes based on the words
    for word in words:
        if word in note_mapping:
            note = note_mapping[word]
            velocity = random.randint(60, 100)  # Random velocity for variation
            track.append(Message('note_on', note=note, velocity=velocity, time=time))
            track.append(Message('note_off', note=note, velocity=0, time=480))  # Note duration
            time = 0  # Reset time for next note
        else:
            time += 120  # Increase time for spaces between words

    # Create a MIDI file and add the track
    midi_file = MidiFile()
    midi_file.tracks.append(track)

    return midi_file

# Example usage
text_input = "hello world music example"
midi_output = generate_midi(text_input)

# Save the MIDI file
midi_output.save('output.mid')
