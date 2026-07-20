import argparse
import json
import random
import sys


def main():
    parser = argparse.ArgumentParser(
        description="Randomly shuffle entries in a JSON array."
    )
    parser.add_argument("json_file", help="Path to the input JSON file")
    args = parser.parse_args()

    try:
        with open(args.json_file, "r", encoding="utf-8") as f:
            data = json.load(f)

        if not isinstance(data, list):
            raise ValueError("Top-level JSON object must be an array.")

        random.shuffle(data)

        with open(args.json_file, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2)
            f.write("\n")

    except (OSError, json.JSONDecodeError, ValueError) as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
