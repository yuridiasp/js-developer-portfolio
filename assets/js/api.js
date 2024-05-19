async function loadProfileData() {
    const url = "https://raw.githubusercontent.com/yuridiasp/js-developer-portfolio/projeto-base/data/profile.json"
    
    return (await fetch(url)).json()
}