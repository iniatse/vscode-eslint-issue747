module.exports = {
	openPage
};

async function openPage(browser, url) {
	try {
		const page = await browser.newPage();
		await page.goto(url);
		await page.waitFor(2000);
		return page;
	} catch (err) {
		console.log(err);
		return err;
	}
}