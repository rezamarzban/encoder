
import hashlib

def calculate_checksum(chunk):
    return hashlib.sha256(chunk.encode()).hexdigest()

def split_into_chunks(input_string, chunk_length):
    chunks = []
    for i in range(0, len(input_string), chunk_length):
        chunk = input_string[i:i+chunk_length]
        if len(chunk) < chunk_length:
            chunk = chunk.ljust(chunk_length)
        chunks.append(chunk)
    return chunks

# Example usage:
input_string = "Here is example string :)"
chunk_length = 3
chunks = split_into_chunks(input_string, chunk_length)
for chunk in chunks:
    checksum = calculate_checksum(chunk)
    print(checksum)
