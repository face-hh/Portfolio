let test = document.getElementById("items");

function popup(item){
    console.log(item)
    var popup = document.getElementById(item);
    popup.classList.toggle("show");
}

test.addEventListener("mouseover", async (d) => {
  let itemName = d.target.outerHTML
    .replace(/<img src="assets\//gi, '')
    .replace(/.png">/gi, '')
    .replace(/aria-describedby="tippy-6 tippy-7 tippy-23"/gi, '');

    if(itemName.startsWith('<div data-item="')){
        itemName = itemName.split('<div data-item="')[1].split('"')[2]
    }

    
    if(itemName === '') return;
    if(itemName.includes('<img src="/assets/')) itemName = itemName.replace('<img src="/assets/', '')

    const data = await populatePre(`/data/${itemName}.txt`);
    const content = getContent(data);


    tippy(`#${itemName}`, {
        theme: 'item',
        placement: 'right',
        allowHTML: true,
        content:
        `<p class="text-gray-400 mt-2" style="font-size: 24px; text-align: center; color:#FF3366;">${content.title}</p>`+
        `<br>`+
        `<p style="text-align: center;">${content.description}</p>`,
    });

    console.log(`Did tippy on ${itemName}`)
});

async function populatePre(url) {
    let response;

    await $.ajax({url: url, method: 'GET' })
    .done(function(_data, _textStatus, jqXHR){
        response = jqXHR.responseText;
    });

    return response;
}

function getContent(content){
    const title = content.split('title=')[1].split('\n')[0];
    const description = content.split('description=')[1]

    return { title, description };
}