const fetch = require('node-fetch')
const {dim, italic, bold, yellow} = require('chalk')
const ora = require('ora')

module.exports = async function episodes(){
    console.log('TODO episodes');
    const spinner = ora({
        text: ''
    })

    spinner.start('Fetching episodes')
    const response = await fetch('https://www.learnwithjason.dev/api/episodes')
    if(!response.ok){
        spinner.fail('Failed to get responses');
        process.exit(1)
    }
    const episodes = await response.json()
    await new Promise( resolve =>{
        setTimeout(() =>resolve(true), 2000)
    })
    spinner.stop()
    episodes.map(episode =>({
        title: episode.title,
        description: episode.description,
        link: `https://lwj.dev/${episode.slug.current}`
    }))
    .map(({ title, description, link}) =>{
        console.log(bold(yellow(title)));
        console.log(link);
        console.log();
        console.log(dim(italic(description)));
        console.log();
        console.log();
    })
}