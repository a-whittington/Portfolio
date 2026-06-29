from pathlib import Path
import sys

def generate_portfolio():
    # Generate json from directory 1, then 2, then 3
    projects_path = Path('images/portfolio/projects')
    with open('images/portfolio/projects/gallery.json', 'w') as outFile:
            outFile.write('[\n')
            # Enter 1, 2, 3 hierarchy
            for num_dir in projects_path.iterdir():
                num_path = Path(num_dir)
                # Inside the numbered dir, iterate through each project
                for dir in num_path.iterdir():
                    if Path(dir).is_dir():
                        current_proj = Path(dir)
                        # Finally in the actual project directory
                        gallery = []
                        for file in current_proj.iterdir():
                            if file.suffix != '.txt': gallery.append(file)
                            else:
                                with open(str(file), 'r') as inFile:
                                    blurb = inFile.read()
                        outFile.write('{\n')
                        outFile.write(f'\tname:"{str(current_proj).split('/')[-1]}",\n')
                        outFile.write(f'\tmain_img:"{gallery[0]}",\n')
                        outFile.write(f'\tblurb:"{blurb}",\n')
                        outFile.write('\tgallery:\n')
                        outFile.write('\t[\n')
                        for img in gallery:
                            outFile.write(f'"\t\t{img}",\n')
                        outFile.write('\t\t""\n')
                        outFile.write('\t]\n')
                        outFile.write('},\n')
            outFile.write('{}]')


                            

def main():
    generate_portfolio()

if __name__=="__main__":
    main()