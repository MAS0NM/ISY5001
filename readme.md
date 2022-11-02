## SECTION 1: PROJECT TITLE
## Intelligent Image Recommendation System

<img src="Miscellaneous\wprec.png"
     style="float: left; margin-right: 0px;" />

---

## SECTION 2 : EXECUTIVE SUMMARY / PAPER ABSTRACT
A wallpaper is the first beautiful thing you will see upon booting up your computer, even before the annoying IMs of your manager. Thus a proper choice of wallpaper will definitely help you start your day.
In the information society, it is not an easy task to select a preferred and tasteful wallpaper, just as it is always hard to decide what for lunch (especially when your institute is on a hillside and there are no restaurants around). But there are so few websites focusing on recommending wallpapers or algorithms which can really learn from my preference of image composition and higher semantics. Thus, we are in demand of designing a wallpaper recommendation system that can meet the users’ preference of images.
In this case, our group is dedicated to developing a whole wallpaper recommendation system with a frontend, a backend, a well performed algorithm and a database. The function of this system includes recommending wallpapers that the algorithm assumes that the user would like in the main page. Users can click into a certain wallpaper item to see the details like the tags of the image,  liking, downloading or subscribing to this wallpaper. The subscribed wallpaper item would then be seen in the “my favorites” page afterwards. The system also provides a search bar where users can input the keywords to search for their interested tags or themes, clicking on the tags in the detail page would also do the job.
Each time a user clicks on “like” or “subscribe” at a certain wallpaper item, the system will rate for how the user likes this item, then records in the database. The more the system assumes that the user likes one item, the more it will recommend similar items to the user afterwards.
Our proposed image and semantic similarity based recommendation algorithm model has a wide range of application scenarios. Besides wallpaper recommendation, it can also be implemented on film or food recommendation fields, as long as the recommended item could be represented in a form of image combined with several tags or short descriptions.

---

## SECTION 3 : CREDITS / PROJECT CONTRIBUTION

| Official Full Name  | Student ID (MTech Applicable)  | Work Items (Who Did What) | Email (Optional) |
| :------------ |:---------------:| :-----| :-----|
| Ma Xin | A0261775W | Proposed the topic and idea, also responsible for task assigning and procedure following up. Responsible for the algorithm model design and coding, providing algorithm APIs to the backend. Participated in the backend coding and database design coding, providing few APIs to the backend guy| A0261775W@nus.edu.sg |
| Zhang Zhimu | A0261649W | Responsible for building the entire front-end framework using React. | A0261649W@nus.edu.sg |
| Sun Wenyuan | A0261977M | Responsible for building the back-end.| A0261977M@nus.edu.sg |
| Wang Zhiyuan | A0261827Y | Help to build the front-end and database, responsible for the report and video recording | A0261827Y@nus.edu.sg |

---

## SECTION 4 : VIDEO OF SYSTEM MODELLING & USE CASE DEMO

<video src="Videos\IRS-PM-2022-08-22-IS04FT-GRP-Abyss-ItelligentImageRecommendationSystem-Video1.mp4" width="800px" height="600px" controls="controls"></video>

<video src="Videos\IRS-PM-2022-08-22-IS04FT-GRP-Abyss-ItelligentImageRecommendationSystem-Video2.mp4" width="800px" height="600px" controls="controls"></video>

---

## SECTION 5 : USER GUIDE

- In the SystemCode folder, the frontend project is named my-app and the backend project is named DjangoAPI. The algorithm project is a subdirectory in DjangoAPI named wrec, which also contains the whole source files, including images and filelist.csv

- To run this project, you'll have to install the latest version of Django, React, antd. As for the algorithm inference side, basic libraries like numpy, pandas, pickle, PIL, matplotlib are all you need.
- The whole project is all built from scratch and the alogrithm is also designed by our own, thus some of the coding may be kind of amateur, but the most important thing is that it records our learning process.

---

## SECTION 6 : PROJECT REPORT / PAPER
- Content
- 1. Abstract	4
- 2.Problem Introduction	5
- 2.1 Problem Introduction	5
- 2.2 Project Aim	6
- 2.3 Project Objective	6
- 3. Knowledge Modeling	6
- 3.1 Requirement Analysis (Business Value)	7
- 3.2 Design	8
- 3.2.1 Data Acquisition	8
- 3.2.2 Data Cleaning	9
- 3.2.3 Knowledge Representation - System Rules	10
- 3.3 Implementation (Knowledge Model - Process flow and description)	11
- 3.4 Testing	13
- 4. Theoretical overview	13
- 4.1 Idea	13
- 4.2 Algorithm Details	14
- 4.3 Algorithm Limitations	15
- 4.4 Algorithm Refinement	16
- 5. Solution Outline	16
- 5.1 System Architecture	16
- 5.1.1 Database Construction	16
- 5.1.2 Frontend Construction	18
- 5.1.3 Backend Construction	20
- 5.2 System Features	21
- 6. Conclusion	22
- 6.1 Overview	22
- 6.2 Limitations	22
- 6.3 Future Development	22
- 7. Reference	23
- Appendix A: Project Proposal	23
- Appendix B: Mapped System Functionalities against knowledge, techniques and skills of modular courses:	27
- Appendix C: Installation & User Guide	27
- Appendix D: Individual Report-Ma Xin	34
- Appendix E: Individual Report-Zhang Zhimu	35
- Appendix F: Individual Report-Sun Wenyuan	36
- Appendix G: Individual Report-Wang Zhiyuan	37

---