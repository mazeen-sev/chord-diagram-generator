from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import Response


from PIL import Image, ImageDraw
from io import BytesIO


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/generate")
def generate_fretboard(data: dict):

    print("Received:", data)

    fret_range = data.get("fretRange", 15)
    tuning = data.get("tuning", "standard")
    mode = data.get("mode", "Chord")
    root = data.get("root", "C")
    chord_type = data.get("chordType", "maj7")
    manual_notes = data.get("manualNotes", [])

    width = 1400
    height = 500

    image = Image.new(
        "RGB",
        (width, height),
        "#27272a"
    )

    draw = ImageDraw.Draw(image)

    # Basic fretboard dimensions
    left = 100
    right = width - 50
    top = 100
    bottom = height - 80

    strings = 6
    frets = fret_range

    fret_width = (right - left) / frets
    string_spacing = (bottom - top) / (strings - 1)

    # Draw frets
    for fret in range(frets + 1):

        x = left + fret * fret_width

        draw.line(
            [(x, top), (x, bottom)],
            fill="#71717a",
            width=2
        )

    # Draw strings
    for string in range(strings):

        y = top + string * string_spacing

        draw.line(
            [(left, y), (right, y)],
            fill="#d4d4d8",
            width=3
        )

    # Fret numbers
    for fret in range(1, frets + 1):

        x = left + (fret - 0.5) * fret_width

        draw.text(
            (x, bottom + 20),
            str(fret),
            fill="#a1a1aa",
            anchor="ma"
        )

    # Title
    if mode == "Chord":
        title = f"{root}{chord_type}"
    else:
        title = f"{root} - Manual Notes"

    draw.text(
        (width // 2, 40),
        title,
        fill="white",
        anchor="mm"
    )

    # Convert image to PNG
    buffer = BytesIO()

    image.save(
        buffer,
        format="PNG"
    )

    return Response(
        content=buffer.getvalue(),
        media_type="image/png"
    )