const Projects = [
  {
    title: "Book Recommendation",
    img: "book_recommendation.png",
    imgAlt: "photo of book recommendation project's homepage",
    githubLink: "https://github.com/harshita-jaiswal/FindYourNextBook",
    siteLink: "http://findyournextbook.pythonanywhere.com/",
    description: `Web application to recommend books to readers based on popularity
        parameters and collaborative approach. Based on the user input it
        provides the list of books with same author, published in same year,
        and user book. Also, it shows the list of top 50 books.`,
  },
  {
    title: "Store Of Experience",
    img: "store_of_exp.png",
    imgAlt: "photo of store of experience project's landing page",
    githubLink: "https://github.com/harshita-jaiswal/StoreOfExperience",
    siteLink: "#",
    description: `An application to store all your life experiences at one place. You
    can visit your life experiences at any time and re-live your
    memories. It is not restricted to store only travel memories but it
    can be used to store your work experience, life experience, etc.`,
  },
];

const projectsContainer = document.querySelector(".project__contentWrapper");

const createProjectCard = (project) => {
  const projectCard = document.createElement("div");
  projectCard.setAttribute("class", "project__card");

  //   project card image
  const projectCardImg = document.createElement("img");
  projectCardImg.src = `./images/${project.img}`;
  projectCardImg.alt = project.imgAlt;
  projectCardImg.setAttribute("class", "project__img");

  //   project card title and icon
  const titleIcon = document.createElement("div");
  titleIcon.setAttribute("class", "project__title-icon");

  //   card title
  const title = document.createElement("p");
  title.setAttribute("class", "project__title");
  title.textContent = project.title;

  //   card links icon
  const linksIcon = document.createElement("div");
  linksIcon.setAttribute("class", "project__linksIcon");

  //   github link icon
  const githubLink = document.createElement("a");
  githubLink.href = project.githubLink;
  githubLink.target = "_blank";

  const githubIcon = document.createElement("img");
  githubIcon.setAttribute("class", "link__icon");
  githubIcon.src = "./images/github-black.png";
  githubIcon.alt = "github icon";

  //   site link icon
  const siteLink = document.createElement("a");
  siteLink.href = project.siteLink;
  siteLink.target = "_blank";

  const siteImg = document.createElement("img");
  siteImg.setAttribute("class", "link__icon");
  siteImg.src = "./images/link.png";
  siteImg.alt = "link icon";

  githubLink.append(githubIcon);
  siteLink.append(siteImg);

  linksIcon.append(githubLink);
  linksIcon.append(siteLink);

  titleIcon.append(title);
  titleIcon.append(linksIcon);

  //   project card description
  const desc = document.createElement("p");
  desc.setAttribute("class", "project__desc");
  desc.textContent = project.description;

  projectCard.append(projectCardImg);
  projectCard.append(titleIcon);
  projectCard.append(desc);

  projectsContainer.append(projectCard);
};

const listProjects = (projects) => {
  projects.forEach((project) => {
    createProjectCard(project);
  });
};

listProjects(Projects);
