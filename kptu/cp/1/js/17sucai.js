Vue.component("fancybox", {
    template: `
    <a class="js-fancybox"><slot /></a>
  `,
    mounted() {
        $(".js-fancybox").fancybox({
            infobar: false,
            buttons: [
                //"zoom",
                //"share",
                //"slideShow",
                //"fullScreen",
                //"download",
                //"thumbs",
                "close"
            ]
        });
    }
});

new Vue({ el: "#app" });
