document.addEventListener("DOMContentLoaded", function() {
    const galleryContainer = document.getElementById('gallery');

    const videos = [
        
        { url: "https://youtu.be/QhB6DI0zuC0", thumbnail: "https://img.youtube.com/vi/QhB6DI0zuC0/hqdefault.jpg", title: "Cant Stop the Feeling Thai 5 DJs Hafla" },
        { url: "https://youtu.be/NoeuI8PJ-Nc", thumbnail: "https://img.youtube.com/vi/NoeuI8PJ-Nc/hqdefault.jpg", title: "Iko Iko<br>Under the Sea Hafla" },
        { url: "https://youtu.be/7oCSdcDf3mo", thumbnail: "https://img.youtube.com/vi/7oCSdcDf3mo/hqdefault.jpg", title: "Viking<br>Sping Hafla" },
        { url: "https://youtu.be/5HLnoWRLMMg", thumbnail: "https://img.youtube.com/vi/5HLnoWRLMMg/hqdefault.jpg", title: "I'm on Fire!!<br>Spring Hafla" },
        { url: "https://youtu.be/4b8osGhImyo", thumbnail: "https://img.youtube.com/vi/4b8osGhImyo/hqdefault.jpg", title: "Drums<br>Ren Faire" },
        { url: "https://youtu.be/-tEwNn0-pwA", thumbnail: "https://img.youtube.com/vi/-tEwNn0-pwA/hqdefault.jpg", title: "Country Fusion<br>Greek Hafla" },
        { url: "https://youtu.be/XktITc3CMVk", thumbnail: "https://img.youtube.com/vi/XktITc3CMVk/hqdefault.jpg", title: "Thriller<br>Oldsmar Talent Show" },
        { url: "https://youtu.be/j3kOrEKzwrA", thumbnail: "https://img.youtube.com/vi/j3kOrEKzwrA/hqdefault.jpg", title: "Folkloric<br>Ren Faire" },
        { url: "https://youtu.be/AQTzPlDu3Uk", thumbnail: "https://img.youtube.com/vi/AQTzPlDu3Uk/hqdefault.jpg", title: "Samba<br>Ren Faire" },
        { url: "https://youtu.be/WrvhcOIYJXU", thumbnail: "https://img.youtube.com/vi/WrvhcOIYJXU/hqdefault.jpg", title: "Voulez Vou<br>Palentines Show" },
        { url: "https://youtu.be/Hd7f_bf78ZE", thumbnail: "https://img.youtube.com/vi/Hd7f_bf78ZE/hqdefault.jpg", title: "Superstars<br>Palentine's Show" },
        { url: "https://youtu.be/W7JkozPkCWQ", thumbnail: "https://img.youtube.com/vi/W7JkozPkCWQ/hqdefault.jpg", title: "Rhythm<br>Palentine's Show" },
        { url: "https://youtu.be/W7JkozPkCWQ", thumbnail: "https://img.youtube.com/vi/W7JkozPkCWQ/hqdefault.jpg", title: "Voulez Vou<br>Palentine's Show" },
        { url: "https://youtu.be/KatF1QD_YkI", thumbnail: "https://img.youtube.com/vi/KatF1QD_YkI/hqdefault.jpg", title: "Folkloric<br>Oldsmar Talent Show" },
        { url: "https://youtu.be/FeJRYLvxFpk", thumbnail: "https://img.youtube.com/vi/FeJRYLvxFpk/hqdefault.jpg", title: "Santa Baby<br>Russian Hafla" },
        { url: "https://youtu.be/2ESs9pAnKHM", thumbnail: "https://img.youtube.com/vi/2ESs9pAnKHM/hqdefault.jpg", title: "Milk & Honey<br>Spring Hafla" }
    ];

    videos.forEach(video => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-lg-3 col-md-4 col-sm-6 mb-4';

        const anchorElement = document.createElement('a');
        anchorElement.href = video.url;
        anchorElement.target = "_blank";

        const imgElement = document.createElement('img');
        imgElement.src = video.thumbnail;
        imgElement.className = 'img-fluid gallery-video';
        imgElement.alt = video.title;

        const titleDiv = document.createElement('div');
        titleDiv.className = 'thumbnail-title';
        titleDiv.innerHTML = video.title;

        anchorElement.appendChild(imgElement);
        colDiv.appendChild(anchorElement);
        colDiv.appendChild(titleDiv);
        galleryContainer.appendChild(colDiv);
    });
});

