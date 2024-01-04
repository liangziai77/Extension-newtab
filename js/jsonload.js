$(function () {
    $.get("./js/data.json", function (data, status) {
        for (var i = 0; i < data.length; i++) {
            const title = `<li class="title"><img src="./imgs/icon/${data[i].icon}.png" alt="" class="icon"><span>${data[i].title}</span></li>`
            $('#dh_list').append(title);

            const node = data[i].node;
            for (var j = 0; j < node.length; j++) {
                const addList = `<li><a rel="nofollow" href="${node[j].url}" target="_blank"><img src="/imgs/icon/${node[j].icon}.png" alt="" class="icon">${node[j].text}</a></li>`
                // const addList = `<li><a rel="nofollow" href="${node[j].url}" target="_blank"><img src="${node[j].url}favicon.ico" alt="" class="icon">${node[j].text}</a></li>`
                $('#dh_list').append(addList);
            }
        }

    });


})