# Automatically Update Portfolio Contents
Hopefully these instructions will be clear for all use cases. They will appear on the GitHub home page if you scroll down, and also I will try to post them in our Discord DMs.

## 1: Add new art to main portfolio
All files you want to include in the full portfolio should be added to images/portfolio/full. Within the `full` folder are three sub-folders, 1, 2, and 3. Images in folder 1 will be added first, followed by folder 2, then folder 3. Images in the `full` folder itself will not be included on the site.

The easiest way to add images is as follows:
1. Go to the GitHub repository and navigate to your [destination folder](https://github.com/a-whittington/Portfolio/tree/main/images/portfolio) (this link takes you to the main portfolio directory, you can access them from there)
    * Note: If you need to add a new folder, follow the directions provided in step 5.
2. Once you've reached your target folder, click to enter folder 1, 2, or 3
3. At the top right, click "Add file", then "Upload files"
4. Upload all files here that you would like
5. Repeat until you have uploaded all images

Notes:
* Images will appear on the website using their filename as the name that gets displayed. As such you may want to double check spellings. Do not use . in your filenames or the name will not be processed correctly (I doubt you want to, most places won't let you, but just in case)
* Multiple images within the same folder CANNOT have the exact same filename, this will cause issues. HOWEVER, a .png and a .jpg *can* in theory have the same filename and therefore the same name on the website. This is *probably* a bad idea however, and something that should be avoided. 
    * (If needed, such as for the Rok not Rock project, you can simply name things 'Rok 1.jpg', 'Rok 2.jpg', etc.)
* The same image can safely be uploaded to multiple different folders (e.g. you can have Velicity in illustrations and in character art if you like). 
    * There is currently NOT a way to avoid adding duplicate images, so try to avoid it where possible (I know it might get difficult, since it's hard to see what's in folders 1, 2, and 3 at the same time)

## 2: Add new art to secondary page (e.g. Illustrations, Character Art, etc)
Simply follow the directions from step 1, adding the art to the desired folder rather than `full`.

## 3: Add a new project
WIP

## 4: Add a new print
WIP

## 5: Add a new folder to the portfolio
You may never need to do this again, as I feel we're pretty well covered by the existing 5 categories and the prints page. That said, if you need to do it, you should do the following:

### Create the correct file structure
1. Go to the [GitHub repository](https://github.com/a-whittington/Portfolio/tree/main/images/portfolio)
2. Click 'Add file', then 'Create new file'
3. At the top of the screen, where it says 'Name your file...', type the name of the **FOLDER** you wish to add, then type '/' to create a new folder
4. Now type 'gallery.json'
5. Press 'Commit changes' and replace the commit message with something useful (for example, created \[Folder Name Here\] folder). Click 'Commit changes' again to create the folder and the gallery file
6. Create folders 1, 2, and 3 (this is annoying I'm sorry)
    * To do this, you will need to create a file in each of these folders just like you created the 'gallery.json' file. These files should be deleted later when you upload images.
    * You can name the file something like '1.txt'
    * This is necessary because GitHub does not allow empty folders to exist. So, make sure you upload images to folders 1, 2, and 3 before deleting their text file contents.
    * DO NOT leave any non-image files inside the folders! I don't know what will happen but I am sure it would not be good
7. Add images to the folders as described above, and remove placeholder file
8. Commit changes as prompted to generate the gallery file

### Create a .html and .js file
If you want me to do this I am happy to. If you feel like making it happen yourself these are the changes that must be made:
1. Go to the GitHub repository [home page](https://github.com/a-whittington/Portfolio)
2. Open up `illustrations.js` and copy the full contents
3. Add a new file, call it `folder_name.js`
4. Paste the contents into your new file
5. In line 30 of the new .js file, change where it says `./images/portfolio/illustrations/gallery.json` by replacing `illustrations` with your folder name
6. Commit changes with an appropriate message
7. Open and copy `illustrations.html`, then paste it into a new file called `folder_name.html`
8. Change line 12, replacing `Illustrations` with the name of the page
    * Change line 24 the same way (make sure it's all caps to match style)
    * Finally, change line 34 in a similar manner
9. Commit changes with an appropriate message
10. Finally, open and edit `portfolio.html`
    * Copy line 18 and paste it in the desired order
    * Replace `index.html` with the html file you just created
    * Replace the text between the >< brackets with your desired page name
    * Commit changs

This should generate the appropriate page and make it accessible from the Portfolio page. If all was done correctly, it will automatically update just like everything else does.