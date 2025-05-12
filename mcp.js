const version = "1.12";
const dataSet = 'rushipatel';

const sitemapConfig = {
    global: {
        contentZones: [
            { name: "mcpCarousel", selector: "#mcpcarousel" }
        ],
        listeners: []
    },
    pageTypeDefault: {
        name: "default",
        interaction: {
            name: "Test",
        },
    },
    pageTypes: [
        {
            name: "homepage",
            isMatch: () => {
                return window.location.href === "https://coderushi2810.github.io/DAMAC-Properties-POC/index.html";
            },
            interaction: { name: 'Home Page Visited' },
            contentZones: [],
            listeners: []
        },
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

SalesforceInteractions.init({ cookieDomain: "coderushi2810.github.io" })
    .then(() => {
        console.log("Sitemap Version:", version);
        console.log("Dataset:", dataSet);
        SalesforceInteractions.initSitemap(sitemapConfig);
    })
    .catch((error) => {
        console.error("Failed to initialize SalesforceInteractions:", error);
    });