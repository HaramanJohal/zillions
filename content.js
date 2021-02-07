const textBlocks = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')

textBlocks.forEach(textBlock => {
    if (textBlock.innerHTML.includes('million')) {
        console.log("found a million in", textBlock)
        textBlock.innerHTML = textBlock.innerHTML.replace("million", "zillion")
    }
})