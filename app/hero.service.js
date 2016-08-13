(function(app) {
  app.HeroService =
    ng.core.Injectable()
    .Class({
      constructor: function() { },
      getHeroes: function() {
        return Promise.resolve(app.HEROES);
      },
      getHeroesSlowly: function() {
        // TODO:解决ES5如何使用 new Promise<Hero[]>
        return new Promise<app.Hero>(resolve =>
          setTimeout(() => resolve(app.HEROES), 2000) // 2 seconds
        );
      }
    });
})(window.app || (window.app = {}));