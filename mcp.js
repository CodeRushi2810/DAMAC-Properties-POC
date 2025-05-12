const version = "1.1";
const dataSet = 'rushipatel';


const sitemapConfig = {
    global: {
        contentZones: [],
        listeners: []
    },
    pageTypeDefault: {
        name: "default",
        interaction: {
            name: "",
        },
    },
    pageTypes: [
        {
            name: "carouselpage",
            isMatch: () => {
                return window.location.href === "https://coderushi2810.github.io/DAMAC-Properties-POC/swiperCarousel.html";
            },
            interaction: { name: 'Carousel Page Visited' },
            contentZones: [
                { name: "carouselSection", selector: "#mcpcarousel" }
            ],
            listeners: []
        }
    ],
};

SalesforceInteractions.init({ cookieDomain: "https://coderushi2810.github.io/Spiritually.io.in/" })
    .then(() => {
        console.log("Sitemap Version:", version);
        console.log("Dataset:", dataSet);
        SalesforceInteractions.initSitemap(sitemapConfig);
    })
    .catch((error) => {
        console.error("Failed to initialize SalesforceInteractions:", error);
    });