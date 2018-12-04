# Asana Submission

**Evaluation Preference: UX implementation**
For this project, I focused on building a clean and smooth implementation of the gallery and the modal to maximize user experience and accessibility. 
---
## Notes
**Performance:**
I created a new set of images under 200KB for faster load times. For scale, the next step would have been to install tooling (ImageMagick and Mogrify) and write scripts to programmatically create smaller version of images in the `raw` directory and add them to the `thumb` directory, as well as add the paths to the `json` file. 

**Scale:**
If this were a multi-page site, I would have used Jekyll or Gatsby to generate static versions of the pages to increase performance. In addition, I would have created a component library for templating.
To scale up to 2000+ pets, I would have implemented lazy-loading of image tiles to improve performance. 

Hosted version here: [AsanAdoptions](https://ckswong.github.io/asanadoption/)