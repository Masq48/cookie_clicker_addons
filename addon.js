Game.registerMod("Test mod", {
    init:function() {
        Game.registerHook('click',function(){Game.Notify(choose(['A good click.','A solid click.','A mediocre click.','An excellent click!']),'',0,0.5);});
    }
});