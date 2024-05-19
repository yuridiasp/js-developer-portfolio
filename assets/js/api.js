async function loadProfileData() {
    const url = "https://raw.githubusercontent.com/yuridiasp/js-developer-portfolio/main/data/profile.json"
    
    return (await fetch(url)).json()
}
