from pathlib import Path
import sys

def generate_portfolio(directory):
    # Generate json from directory 1, then 2, then 3
    with open(directory+'/gallery.json', 'w') as outFile:
        outFile.write('[\n')
        for i in range(1,4):
            directory_path = directory+f"/{i}"
            for file in directory_path.iterdir():
                print("Now creating an entry for file " + file.name)
                name = file.name.split('.')[0]
                blurb = ""
                outFile.write('{\n')
                localurl = directory_path + '/' + file.name
                outFile.write('\t\"name\":\"' + name + '\",\n')
                outFile.write('\t\"blurb\":\"' + blurb + '\",\n')
                outFile.write('\t\"localurl\":\"' + localurl + '\"\n')
                outFile.write('},')
        outFile.write('\n]')

def main():
    directory = sys.argv[1]
    print(f"Now starting to generate JSON data for {directory}")
    generate_portfolio(directory)