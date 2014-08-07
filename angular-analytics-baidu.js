angular.module('l42y.analytics.integrations.baidu', [
  'l42y.analytics'
]).config(function (
  AnalyticsProvider
) {
  var identifier = 'Baidu';
  var variableName = '_hmt';

  var config = AnalyticsProvider.config.integrations[identifier];
  (function (window, document, script, variableName, config, scriptElement, firstScript) {
    window[variableName] = [
      ['_setAccount', config.siteId],
      ['_setAutoPageview', false]
    ];
    scriptElement = document.createElement(script);
    scriptElement.src = '//hm.baidu.com/hm.js?' + config.siteId;
    firstScript = document.getElementsByTagName(script)[0];
    firstScript.parentNode.insertBefore(scriptElement, firstScript);
  }(window, document, 'script', variableName, config));

  AnalyticsProvider.integrate(identifier, {
    page: function trackPageViewByBaiduAnalytics (current) {
      window[variableName].push(['_trackPageview', current]);
    },
    track: function trackEventByBaiduAnalytics (event, prop) {
      window[variableName].push([
        '_trackEvent',
        prop.category,
        event,
        prop.label,
        prop.value
      ]);
    }
  });
});
