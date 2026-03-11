from pathlib import Path

# Take input directory, determine case
path = input("Enter folder to generate from: ./images/")
path = './images/' + path
while 1:
    entry_type_flag = input("Is this a project (PR) or a portfolio (PO) entry? ")
    if (entry_type_flag.lower() == "po"): # portfolio case
        break
    elif (entry_type_flag.lower() == "pr"): # project case
        break
    else: print("Invalid input")
if (entry_type_flag.lower() == "po"):
    print("You chose a portfolio entry")
else:
    print("You chose a project entry")

# Establish path to directory and count number of files (relevant for Project case)
filecount = 0
directory_path = Path(path)
for file in directory_path.iterdir():
    if file.is_file():
        filecount = filecount + 1
print("There are " + str(filecount) + " files in " + path)

# BEGIN PORTFOLIO CASE
if (entry_type_flag.lower() == 'po'):
    filename = input("Enter the target filename: ")
    filename = "./" + filename
    try: 
        with open(filename, 'r') as inFile:
            file_contents = inFile.read()
            json_entries = file_contents.replace(']', '')
            json_entries = json_entries.replace('[', '')
        first = 0
    except:
        print("File not found, it will be created")
        first = 1
        json_entries = ""
    finally:
        with open(filename, 'w') as outFile:
            outFile.write('[\n')
            outFile.write(json_entries)
            for file in directory_path.iterdir():
                if first:
                    first = 0
                    outFile.write('{\n')
                else: outFile.write(',\n{\n')
                print("Now creating an entry for file " + file.name)
                name = input("Enter the name of this piece: ")
                blurb = input("Enter the blurb for this piece: ")
                localurl = path + '/' + file.name
                outFile.write('\t\"name\":\"' + name + '\",\n')
                outFile.write('\t\"blurb\":\"' + blurb + '\",\n')
                outFile.write('\t\"localurl\":\"' + localurl + '\"\n')
                outFile.write('}')
            outFile.write('\n]')

# BEGIN PROJECT CASE
else:
    filename = input("Enter the target filename: ")
    filename = "./" + filename
    main_img = ''
    try: 
        with open(filename, 'r') as inFile:
            file_contents = inFile.read()
            json_entries = '' + file_contents[1:-1] + ''
        first = 0
    except:
        print("File not found, it will be created")
        first = 1
        json_entries = ""
    finally:
        with open(filename, 'w') as outFile:
            outFile.write('[\n')
            outFile.write('{\n')
            main_found = 0
            gallery = []
            for i in range(filecount):
                gallery.append('')
            for file in directory_path.iterdir():
                print("Now making a gallery entry for " + file.name)
                while 1:
                    filenum = input("Enter a number 1 to " + str(filecount) + ": ")
                    if not filenum.isdigit():
                        print("Error: must be a number 1 to " + str(filecount))
                        continue
                    if gallery[int(filenum)-1] != '':
                        print("Error: must choose an empty slot in the gallery")
                        continue
                    else:
                        gallery[int(filenum)-1] = path + '/' + file.name
                        break
                if not main_found: 
                    is_main_flag = input("Make main image? (y/n): ")
                    if (is_main_flag.lower() == 'y'):
                        main_img = path + '/' + file.name
                        main_found = 1
            if main_img == '': main_img = gallery[0]
            name = input("What would you like to call this project? ")
            blurb = input("What should the blurb for this project be? ")

            # Output time!
            outFile.write('\t\"name\":\"' + name + '\",\n')
            outFile.write('\t\"main_img\":\"' + main_img + '\",\n')
            outFile.write('\t\"gallery\":\n\t[\n')
            count = 1
            for img in gallery:
                outFile.write('\t\t\"' + img + '\"')
                if count != filecount: outFile.write(',\n')
                else: outFile.write('\n')
                count = count + 1
            outFile.write('\t],\n')
            outFile.write('\t\"blurb\":\"' + blurb + '\"\n},\n')
            outFile.write(json_entries)
            outFile.write(']')