import express from 'express'
import bodyParser from 'body-parser'
const app = express()
const port = 4000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))



app.get('/posts',(req,res)=>{
    res.send(arr)
})

app.get( '/posts/:id', ( req, res ) => {
    const pid = parseInt( req.params.id );
    console.log(arr[pid-1])
    res.send(arr[pid-1])
})
//create a new blog through api call
app.post('/post',(req,res)=>{
    console.log(req.body);
    var newBlog = {
        id:arr.length+1,
        ...req.body,
        date: new Date().toISOString()
    }
    console.log(newBlog);
    arr.push(newBlog);
    res.send(arr)
})
//editing the post 
app.patch("/posts/:id", (req, res) => {
    const post = arr.find((p) => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ message: "Post not found" });
    if (req.body.blogHeading) post.blogHeading = req.body.blogHeading;
    if (req.body.blogText) post.blogText = req.body.blogText;
    if (req.body.Author) post.Author = req.body.Author;
    res.send(post);
  });
//deleting the post
app.delete("/posts/:id", (req, res) => {
    const index = arr.findIndex((p) => p.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: "Post not found" });
  
    arr.splice(index, 1);
    res.json({ message: "Post deleted" });
  });
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})



var arr = [
    {
        id: 1,
        blogHeading: "New Discovery: Scientists Find Evidence of Water on Mars",
        blogText: "In a groundbreaking discovery, scientists have found strong evidence of liquid water on Mars, suggesting the possibility of life beyond Earth. The discovery was made using data from the Mars Rover...",
        date: "2024-02-18",
        author: "NASA"
    },
    {
        id: 2,
        blogHeading: "COVID-19 Update: New Variant Detected in Several Countries",
        blogText: "Health authorities have reported a new variant of the COVID-19 virus spreading rapidly across multiple countries. The variant, named Omicron-2, is raising concerns about increased transmissibility and vaccine efficacy...",
        date: "2024-02-17",
        author: "WHO"
    },
    {
        id: 3,
        blogHeading: "Stock Market Surges to Record Highs Following Economic Stimulus Package",
        blogText: "Following the announcement of a new economic stimulus package, the stock market has seen a significant surge, reaching record highs across major indices. Investors are optimistic about the potential for economic recovery...",
        date: "2024-02-16",
        author: "Financial Times"
    },
    {
        id: 4,
        blogHeading: "Breaking: Earthquake Hits Pacific Ring of Fire, Tsunami Warning Issued",
        blogText: "A powerful earthquake measuring 7.5 on the Richter scale has struck the Pacific Ring of Fire, triggering a tsunami warning for coastal areas. Authorities are urging residents to evacuate to higher ground...",
        date: "2024-02-15",
        author: "USGS"
    },
    {
        id: 5,
        blogHeading: "SpaceX Successfully Launches Mission to Jupiter's Moon Europa",
        blogText: "SpaceX has successfully launched a mission to explore Jupiter's moon Europa. The mission, named Europa Explorer, aims to search for signs of life beneath the moon's icy surface...",
        date: "2024-02-14",
        author: "SpaceX"
    },
    {
        id: 6,
        blogHeading: "Tech Giant Unveils Latest Innovation: Augmented Reality Glasses",
        blogText: "A leading tech company has unveiled its latest innovation: augmented reality glasses that promise to revolutionize the way we interact with digital content. The glasses feature advanced AR technology...",
        date: "2024-02-13",
        author: "TechNews"
    },
    {
        id: 7,
        blogHeading: "Environmental Crisis: Record Heatwaves Sweep Across the Globe",
        blogText: "Record-breaking heatwaves are sweeping across the globe, causing widespread devastation and putting millions of lives at risk. Experts warn that climate change is exacerbating the frequency and intensity of extreme weather events...",
        date: "2024-02-12",
        author: "National Geographic"
    },
    {
        id: 8,
        blogHeading: "Breaking: Cyberattack Shuts Down Major Financial Institutions",
        blogText: "A sophisticated cyberattack has targeted major financial institutions, causing widespread disruption to banking services and financial markets. Authorities are investigating the source of the attack...",
        date: "2024-02-11",
        author: "Cybersecurity Today"
    },
    {
        id: 9,
        blogHeading: "Medical Breakthrough: New Drug Shows Promise in Alzheimer's Treatment",
        blogText: "Researchers have announced a major medical breakthrough in the treatment of Alzheimer's disease. A new drug has shown promising results in clinical trials, offering hope to millions of patients and their families...",
        date: "2024-02-10",
        author: "Medical Journal"
    },
    {
        id: 10,
        blogHeading: "Space Tourism Takes Off: First Commercial Flights to the Moon Announced",
        blogText: "In a historic moment for space exploration, the first commercial flights to the Moon have been announced, marking the beginning of a new era in space tourism. Tickets for the lunar flights are now available for purchase...",
        date: "2024-02-09",
        author: "Space Travel Magazine"
    }
];
