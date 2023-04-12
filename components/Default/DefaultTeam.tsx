const Members = [
  {
    id: '1',
    title: 'Jane Doe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis velit, rutrum et pellentesque a, accumsan ac augue.',
    image: 'https://www.imagemhost.com.br/images/2023/02/09/ai-face.jpg',
    positionTitle: 'Software Developer',
    positionDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis velit, rutrum et pellentesque a, accumsan ac augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis velit, rutrum et pellentesque a, accumsan ac augue.',
    linkedInIcon: 'https://www.imagemhost.com.br/images/2023/02/09/linkedin.png',
    linkedInLink: '/',
    githubIcon: 'https://www.imagemhost.com.br/images/2023/02/09/github.png',
    githubLink: '/',
  },
  {
    id: '2',
    title: 'Jack Doe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis velit, rutrum et pellentesque a, accumsan ac augue.',
    image: 'https://www.imagemhost.com.br/images/2023/02/09/ai-face2.jpg',
    positionTitle: 'QA Engineer',
    positionDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis velit, rutrum et pellentesque a, accumsan ac augue.',
    linkedInIcon: 'https://www.imagemhost.com.br/images/2023/02/09/linkedin.png',
    linkedInLink: '/',
    githubIcon: 'https://www.imagemhost.com.br/images/2023/02/09/github.png',
    githubLink: '/',
  },
  {
    id: '3',
    title: 'Jennifer Doe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis velit, rutrum et pellentesque a, accumsan ac augue.',
    image: 'https://www.imagemhost.com.br/images/2023/02/09/ai-face3.jpg',
    positionTitle: 'Scrum Master',
    positionDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis velit, rutrum et pellentesque a, accumsan ac augue.',
    linkedInIcon: 'https://www.imagemhost.com.br/images/2023/02/09/linkedin.png',
    linkedInLink: '/',
    githubIcon: 'https://www.imagemhost.com.br/images/2023/02/09/github.png',
    githubLink: '/',

  },
]


export const DefaultTeam = () => {
  return (
    <div className="xl:mt-16  mt-5 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
      <dl className="w-full ">
        <div className=" bg-slate-600 rounded-b-lg mb-10 ">
          {Members.map((member) => {
            return (
              <div key={member.id} className="lg:flex items-center">
                <div className="items-center p-20 ">
                  <div className="flex-col items-center py-5 bg-slate-900 rounded-b-lg max-w-sm flex lg:border-r border-slate-400 ">
                    <div className="border-[3px] border-slate-200 rounded-full p-[0.3rem]">
                      <img src={member.image} alt='member1' className="w-32 h-32 rounded-full " />
                    </div>
                    <div className="justify-center flex-col ">
                      <div className="my-6 lg:my-0">
                        <h1 className="tracking-tight text-center py-[0.6rem] text-slate-200 font-semibold  text-2xl">
                          {member.title}
                        </h1>
                      </div>
                      <dd className="xl:mt-2 md:mt-20 py-[0.4rem] w-[400px] font-light text-sm tracking-tight lg:px-14 text-justify text-slate-200 ">
                        {member.description}
                      </dd>
                    </div>
                  </div>
                </div>
                <div>

                </div>
                <div className="flex-col ">
                  <div className="mb-6 p-2 bg-slate-900">
                    <p className="text-slate-200  font-semibold tracking-tight text-xl">
                      {member.positionTitle}
                    </p>
                  </div>
                  <div className="py-3 px-4  lg:h-[200px] bg-slate-900 w-[600px] ">
                    <p className="font-light tracking-tight text-slate-200 text-justify">
                      {member.positionDescription}
                    </p>
                  </div>
                  <div className="flex py-2 px-4 mt-auto bg-slate-900 rounded-b-lg">
                    <div className="mr-2 ">
                      <a href={member.linkedInLink} className="">
                        <img alt="linkedin" src={member.linkedInIcon} className="h-6 w-6" />
                      </a>
                    </div>
                    <div className="mr-2">
                      <a href={member.githubLink} className="">
                        <img alt="github" src={member.githubIcon} className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </dl>
    </div>
  )
}