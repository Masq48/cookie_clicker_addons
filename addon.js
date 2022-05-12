Game.registerMod("Test mod", {
    init:function() {
        Game.registerHook("click",function() {Game.Notify("Hello");});
    }
});