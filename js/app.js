const sections = [
  {
    id: "section1",
    menu: "Lorem Ipsum",
    title: "What is Lorem Ipsum?",
    text: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ],
  },
  {
    id: "section2",
    menu: "Origin",
    title: "Where does it come from?",
    text: [
      `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
      `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
    ],
  },
  {
    id: "section3",
    menu: "Uses",
    title: "Why do we use it?",
    text: [
      `t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
    ],
  },
  {
    id: "section4",
    menu: "Go get it",
    title: "Where can I get some?",
    text: [
      `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
      `The most known generator of Lorem Ipsum text is <a href="https://www.lipsum.com/" target="blank">lipsum.com</a>`,
    ],
  },
  {
    id: "section5",
    menu: "Examples",
    title: "Some examples:",
    text: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus lectus, ullamcorper vel elit eget, bibendum feugiat sem. Nunc ac pellentesque dolor. Duis quis enim id massa suscipit tempor eu sit amet massa. Curabitur nec erat sagittis nunc tincidunt laoreet quis ut tortor. Aenean non vulputate lorem. Praesent odio sem, vulputate eget enim volutpat, imperdiet gravida diam. Fusce a luctus nunc. Donec laoreet venenatis condimentum. Nam cursus in felis sit amet ornare. Sed elementum mattis dapibus. Quisque vel nisi pretium, blandit nibh auctor, convallis ante. Pellentesque varius elit ut elit posuere, et porta tellus maximus. Cras euismod placerat erat, ut auctor ipsum consequat accumsan. Morbi vitae ultrices ante. Integer pharetra ligula et tincidunt facilisis.`,
      `Donec condimentum libero at ornare lacinia. Phasellus id tortor eget turpis bibendum gravida. Vivamus augue dui, sollicitudin sit amet felis non, lacinia eleifend augue. Mauris tempor molestie erat a dictum. Nullam quis fringilla mi, vitae commodo felis. Sed quis ex et odio pretium mattis ut in massa. Phasellus placerat euismod leo quis laoreet. Mauris non commodo urna, et vehicula mi. Phasellus vestibulum molestie ligula. Ut in tortor ac velit vulputate euismod. Donec fermentum enim velit, a elementum dui facilisis accumsan. Nullam tincidunt mollis egestas. Duis tincidunt, sapien vel euismod molestie, nisl nunc sagittis diam, non pulvinar dolor neque sit amet sapien. Vivamus semper pretium tortor, non consectetur turpis molestie sed. Nulla eget dapibus quam, vitae interdum tortor. Curabitur sed nulla nisi.`,
      `Nullam dignissim erat at molestie faucibus. Aenean et ante vel mauris accumsan vulputate. Sed congue nibh sem, id imperdiet neque accumsan vel. Quisque aliquet sed ante vel aliquet. Integer vitae quam eget velit iaculis ultrices a sit amet ante. Nunc consectetur augue justo, eget posuere magna vulputate vel. Vivamus justo lacus, cursus non mauris vitae, tempus luctus lacus. Proin ut odio ligula. Cras elementum lacus quis cursus dictum. Phasellus aliquet ex et turpis rutrum, vitae vulputate ante pulvinar. Pellentesque commodo urna eu nisl condimentum, vitae fermentum diam imperdiet. Vivamus imperdiet sapien nisl, malesuada commodo urna condimentum eu. Vestibulum auctor luctus erat, sed interdum arcu pharetra id. Phasellus blandit congue mi vitae rhoncus. Praesent at felis nec enim sagittis bibendum vitae et urna.`,
      `Fusce ultricies mi ac luctus porttitor. Mauris ornare eget dolor vel iaculis. Integer dui libero, hendrerit non finibus sit amet, malesuada sed nibh. Vivamus nisi mi, lacinia non lobortis aliquam, efficitur nec metus. Nam eu turpis dictum, blandit odio in, auctor dui. Pellentesque ut euismod nulla. Aenean suscipit sit amet nisi et feugiat. Duis accumsan bibendum condimentum. Integer commodo porttitor odio nec accumsan. Praesent vitae turpis ac mauris feugiat consectetur. Integer a felis neque. Praesent tincidunt augue sit amet imperdiet convallis. Cras fringilla varius accumsan. Nullam porttitor enim nec eros posuere tempus. Etiam feugiat tellus metus, et venenatis augue luctus sed.`,
      `Duis tellus velit, auctor vitae justo ac, accumsan pulvinar urna. Fusce sit amet volutpat velit. Cras eu nulla nec sem feugiat euismod eu sit amet mauris. Vestibulum aliquam ante sit amet ex porttitor auctor. Aliquam in mauris at nisl egestas tempor. Cras sit amet fringilla ligula. Fusce ante libero, ornare id porttitor nec, faucibus nec est. Vestibulum ac libero augue. Nunc consequat, diam ut ullamcorper rhoncus, dui metus egestas turpis, sit amet scelerisque arcu ante ut tellus. Praesent eget fermentum urna, non laoreet odio. Nunc suscipit diam at purus tempor, finibus varius risus interdum. Etiam faucibus consequat sem a efficitur.`,
      `Quisque hendrerit sapien et mollis condimentum. Cras maximus neque massa. Morbi hendrerit mi sed massa pellentesque congue. Vivamus sit amet quam non turpis consectetur feugiat et eu sem. Aenean posuere tellus ut risus pretium rutrum. Proin imperdiet et felis non molestie. Vestibulum eu tincidunt enim, bibendum faucibus odio. Pellentesque et condimentum leo, eu congue sapien. Donec tincidunt tristique nisl a mattis. Nulla facilisi. Sed consectetur nisi non risus aliquet venenatis. Suspendisse ac sapien ex. Etiam ac hendrerit augue. Mauris ut dignissim turpis.`,
      `Aenean tempus tortor ligula, sit amet hendrerit elit aliquam non. Fusce auctor, nibh sit amet dapibus hendrerit, ex ipsum dapibus dolor, luctus hendrerit quam enim blandit felis. Nulla scelerisque nulla neque, a convallis sapien rhoncus nec. Fusce tortor metus, ornare suscipit interdum id, mattis quis urna. Nullam tincidunt massa nec maximus imperdiet. Nullam varius gravida justo, in dignissim nibh ultrices ut. Cras malesuada venenatis felis, vel mollis massa eleifend id. Quisque lacus mauris, interdum nec efficitur vel, sollicitudin a tellus. Etiam et libero turpis. Nam efficitur facilisis tempus. Pellentesque at sem ut nisl pellentesque luctus ut vel enim. Donec suscipit vestibulum odio, eget varius diam blandit ut. Donec sit amet ligula velit. Nam cursus imperdiet porta. Aliquam mattis ipsum sed odio aliquet tristique condimentum vel turpis.`,
    ],
  },
];

var activeSectionId;

const content = document.querySelector(".content");
const sidebar = document.querySelector(".sidebar-list");
var sectionsByTag = document.getElementsByTagName("section"); //todo

content.addEventListener("scroll", (e) =>
  setTimeout(findSectionInViewport, 100)
);

for (const section of sections) {
  const newSection = document.createElement("section");
  newSection.setAttribute("id", section.id);
  newSection.setAttribute("class", "home-section");

  const paragraphs = section.text.map((p) => `<p>${p}</p>`).join("");

  newSection.innerHTML = `
    <span class="section-title">
    <h2 onClick="collapse('${section.id}')">${section.title}</h2>
    <a class="remove-button" onClick="removeSection('${section.id}')">x</a>
    </span>
    <div id="p-container-${section.id}" class="p-container">
    ${paragraphs}
    </div>
  `;

  content.appendChild(newSection);

  const newMenuItem = document.createElement("li");

  newMenuItem.textContent = section.title;
  newMenuItem.setAttribute("id", `sidebar-${section.id}`);
  newMenuItem.setAttribute("onClick", `scrollToAnchor('${section.id}')`);
  newMenuItem.setAttribute("class", `sidebar-list-item sidebar-${section.id}`);

  sidebar.appendChild(newMenuItem);
}

const goToTop = document.createElement("a");

goToTop.textContent = "Go To Top";
goToTop.setAttribute("class", "to-top");
goToTop.setAttribute("onClick", "scrollToAnchor('section1')");

content.appendChild(goToTop);

const findSectionInViewport = () => {
  let closetToTheTop = window.innerHeight,
    activeSection = null;

  for (const s of sectionsByTag) {
    let offset = s.getBoundingClientRect();

    if (Math.abs(offset.top) < closetToTheTop) {
      closetToTheTop = Math.abs(offset.top);
      activeSection = s;
    }
  }

  const sidebarItems = document.querySelectorAll(".sidebar-list-item");
  //---If the section exists
  if (activeSection) {
    sidebarItems.forEach((c) => c.classList.remove("sidebar-list-item-active"));

    const listItem = document.getElementById(`sidebar-${activeSection.id}`);
    listItem.classList.add("sidebar-list-item-active");
  }
};

// Scroll to section on item list click
const scrollToAnchor = (sectionId) => {
  const element = document.getElementById(sectionId);

  element.scrollIntoView({ behavior: "smooth" });
  element.classList.add("home-section-active");

  const previousElement = document.getElementById(activeSectionId);

  if (previousElement) {
    previousElement.classList.remove("home-section-active");
  }

  activeSectionId = sectionId;
};

const removeSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  section.remove();

  const sidebarItem = document.getElementById(`sidebar-${sectionId}`);
  sidebarItem.classList.add("sidebar-list-item-removed");
  sidebarItem.removeAttribute("onClick");
};

const collapse = (sectionId) => {
  const pContainer = document.getElementById(`p-container-${sectionId}`);

  pContainer.classList.add("p-container-show");
};
