(function () {
  function stAnalytics() {
    var user = localStorage.getItem("user");

    this.getInstance = function () {
      const self = this;

      const sendButtonEvent = function (eventName, metaData = {}) {
        sendAnalytics.call(self, eventName, "button", metaData);
      };

      const sendPageViewEvent = function (eventName, metaData = {}) {
        sendAnalytics.call(self, eventName, "page", metaData);
      };
      return { sendButtonEvent, sendPageViewEvent };
    };

    var sendAnalytics = function (eventName, type, metaData = {}) {
      if (!user) {
        user = Math.floor(Math.random() * 9999 + 9999);
        localStorage.setItem("user", user);
      }
      const data = {
        userId: user,
        type,
        userMetaData: metaData,
      };
      if (user === "internal-123") {
        console.log({ eventName, metaData: data });
        return;
      } else {
        fetch("http://example.com", {
          method: "POST",
          body: JSON.stringify({
            eventName,
            metaData: data,
          }),
        });
        analytics.track("Some Event", {
          eventName,
          metaData: data,
        });
      }
    };
  }

  window.stAnalytics = new stAnalytics();

  function stInit() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(window.stAnalytics), 1000);
    });
  }

  window.stInit = stInit;
})();
