Game.registerMod("Test mod", {
    init:function() {
        Game.registerHook("click",function() {Game.notify("Hello");});
    }
});