<<<<<<< HEAD

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/digitalinnovationone/js-developer-portfolio/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
=======
async function loadProfileData() {
    const url = "https://raw.githubusercontent.com/yuridiasp/js-developer-portfolio/projeto-base/data/profile.json"
    
    return (await fetch(url)).json()
}
>>>>>>> projeto-base
