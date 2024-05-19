<<<<<<< HEAD

function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
            <li>
                <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
                <a href="${project.url}" target="_blank">${project.url}</a>
            </li>
        `
    }).join('')
}

function updateProfessionalExperience(profileData) {
    const professionalExperience = document.getElementById('profile.professionalExperience')
    professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
        return `
            <li>
                <h3 class="title">${experience.name}</h3>
                <p class="period">${experience.period}</p>
                <p>${experience.description}</p>
            </li>
        `
    }).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateProfessionalExperience(profileData)
})()
=======
function setPhotoProfile(data) {
    const { photo, nome } = data
    const photoHtml = document.querySelector(".photo")
    
    photoHtml.innerHTML = `<img src="${photo}" alt="Foto de ${nome}">`
}

function setNameProfile(data) {
    const { nome } = data
    const title = document.querySelector(".title")
    
    title.innerHTML = `Olá, <br>eu sou ${nome}`
}

function setJobProfile(data) {
    const { titulo } = data
    const job = document.querySelector(".job")

    job.innerHTML = titulo
}

function setLocationProfile(data) {
    const { localidade } = data
    const { estado, pais } = localidade
    const location = document.querySelector(".location")

    location.innerHTML = `${estado} - ${pais}`
}

function setPhoneProfile(data) {
    const { telefone } = data
    const phone = document.querySelector(".phone")

    phone.innerHTML = `<a href="tel:${telefone}">${telefone}</a>`
}
function setEmailProfile(data) {
    const { email } = data
    const emailHtml = document.querySelector(".email")

    emailHtml.innerHTML = `<a href="mailto:${email}">${email}</a>`
}

function setHardSkills(data) {
    const { skills } = data
    const tools = document.querySelector(".tools ul")

    const html = skills.hardSkills.reduce((prev, cur) => prev.concat(`<li><img src="${cur.logo}" alt="${cur.nome}" title="${cur.nome}"></li>`), "")

    tools.innerHTML = html
}

function setSoftSkills(data) {
    const { skills } = data
    const softskill = document.querySelector(".personal ul")

    const html = skills.softSkills.reduce((prev, cur) => prev.concat(`<li>${cur}</li>`), "")

    softskill.innerHTML = html
}

function setLanguagesIdiomas(data) {
    const { idiomas } = data
    const languages = document.querySelector(".languages")

    const html = idiomas.reduce((prev, cur) => prev.concat(`<li>${cur.nome} (${cur.nivel})</li>`), "")

    languages.innerHTML = html
}

function setEducationContent(data) {
    const { educacao } = data
    const [ dio, superior ] = educacao

    const setAchievements = (dio) => {
        const { conquistas } = dio
        const conquistasList = document.querySelector(".conquistas")

        const html = conquistas.reduce((prev, cur) => prev.concat(`
            <figure>
                <img src="${cur.logo}" alt="${cur.nome}">
            </figure>
        `), "")

        conquistasList.innerHTML = html
    }

    const setEducation = (dio, superior) => {
        const education = document.querySelector(".education")

        const htmlDio = `
            <li>
                <h3 class="title">${dio.nome}</h3>
                <p>${dio.instituicao} | ${dio.periodo.inicio} - ${dio.periodo.fim}</p>
            </li>
        `
                
        const htmlSuperior = `
            <li>
                <h3 class="title">${superior.nome}</h3>
                <p>${superior.instituicao} | ${superior.periodo.inicio} - ${superior.periodo.fim}</p>
            </li>
        `

        education.innerHTML = htmlDio + htmlSuperior
    }

    setAchievements(dio)
    setEducation(dio, superior)
}

function setPortfolio(data) {
    const { portfolio } = data
    const portfolioHtml = document.querySelector(".portfolio")

    const html = portfolio.reduce((prev, cur) => prev.concat(`
        <li>
            <h3 class="title github">${cur.nome}</h3>
            <a href="${cur.gitHub}" target="_blank">${cur.gitHub}</a>
            <a href="${cur.certificado}" target="_blank">Certificado</a>
        </li>
    `), "")

    portfolioHtml.innerHTML = html
}

function setProfessionalExperience(data) {
    const { experiencias } = data
    const experience = document.querySelector(".experience")

    const html = experiencias.reduce((prev, cur) => prev.concat(`
        <li>
            <h3 class="title">${cur.nome} / ${cur.instituicao}</h3>
            <p class="period">${cur.periodo.inicio} - ${cur.periodo.fim}</p>
            <p>
                ${cur.descricao}
            </p>
        </li>
    `), "")

    experience.innerHTML = html
}

(async () => {
    const profileData = await loadProfileData()
    console.log(profileData);
    setPhotoProfile(profileData)
    setNameProfile(profileData)
    setJobProfile(profileData)
    setLocationProfile(profileData)
    setPhoneProfile(profileData)
    setEmailProfile(profileData)
    setHardSkills(profileData)
    setSoftSkills(profileData)
    setLanguagesIdiomas(profileData)
    setEducationContent(profileData)
    setPortfolio(profileData)
    setProfessionalExperience(profileData)
})()
>>>>>>> projeto-base
