const puppeteer = require("puppeteer");

const fetchFlipkartProductDetails = async (url) => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "domcontentloaded" });

    const productDetails = await page.evaluate(() => {
      const title = document.querySelector("span.VU-ZEz")?.innerText || "";
      const price =
        document.querySelector("div.Nx9bqj.CxhGGd")?.innerText || "";

      const description =
        document.querySelector("div.yN\\+eNk.w9jEaj")?.innerText || "";

      const reviews = Array.from(document.querySelectorAll("div.ZmyHeo"))
        .slice(0, 5) // Get the first 5 elements
        .map(
          (parent) =>
            Array.from(parent.querySelectorAll("div"))
              .map((child) => child.textContent)
              .join(" ") // Join child texts if needed
              .split("READ MORE")[0] // Get the text before "READ MORE"
              .trim() // Trim whitespace
        );

      const totalPurchases =
        document.querySelector("span.Wphh3N")?.innerText.split(" Ratings")[0] ||
        "";
      const image_url =
        document.querySelector("img.DByuf4.IZexXJ.jLEJ7H")?.src || "";

      const rating = document.querySelector("div.XQDdHH").innerText || "";

      return {
        title,
        price: Number(price.replace(/[₹,]/g, "")),
        description,
        reviews,
        totalPurchases: parseInt(totalPurchases.replace(/[^0-9]/g, "")),
        image_url,
        rating,
      };
    });

    await browser.close();
    return productDetails;
  } catch (error) {
    console.error("Error fetching Flipkart data:", error);
    throw new Error("Unable to fetch product details");
  }
};

module.exports = { fetchFlipkartProductDetails };
