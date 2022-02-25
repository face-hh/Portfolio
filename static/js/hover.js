let test = document.getElementById("items");

test.addEventListener("mouseover", async (d) => {
  let itemName = d.target.outerHTML
    .replace(/<img src="assets\//gi, '')
    .replace(/.png">/gi, '')
    .replace(/aria-describedby="tippy-6 tippy-7 tippy-23"/gi, '');

    if(itemName.startsWith('<li data-item="')){
        let x = itemName.split('<li data-item="')[1].split('"')[3]

        console.log(itemName.split('<li data-item="')[1].split('"'))
        x = itemName.split('<li data-item="')[1].split('"')[2]

        x = x
        .replace('<img src="/assets/', '')
        .replace('/assets/', '');

        
        itemName = x.includes('<img src="/assets/') ? x.split('<img src="/assets/')[0] : x
        console.log({x})
    }

    if(itemName === '') return;
    console.log(`/data/${itemName}.txt`, itemName)

    const data = await populatePre(`/data/${itemName}.txt`);
    const content = getContent(data);

    tippy(`#${itemName}`, {
        delay: 50,
        theme: 'item',
        placement: 'right',
        allowHTML: true,
        content:
        `<p class="text-gray-400 mt-2" style="font-size: 24px; text-align: center; color:#FF3366;">${content.title}</p>`+
        `<br>`+
        `<p style="text-align: center;">${content.description}</p>`,
    });
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