import notify from "./Notify.vue";
import { createApp } from "vue";
import { useShowLoading } from "~/stores/loading";
import { Notify } from "~~/types/notify";

export default {
  install: (app: any) => {
    const nuxtApp = useNuxtApp();
    nuxtApp.provide("notify", (options: Notify) => initElement(options));
    const initElement = (options: Notify) => {
        const notifyComponent = document.getElementById("notify");
      if (notifyComponent) {
        if(options.timeout) {
            console.log(1)
            setTimeout(() => {
                nuxtApp.$bus.$on("timeout", () => {
                    console.log(2)
                    removeElement(notifyComponent);
                });
              }, 0);
        }
        removeElement(notifyComponent);
        createElement(options);
      } else {
        createElement(options);
      };
    };

    const createElement = (options: Notify) => {
        const parentNode = document.getElementById("__nuxt");
        const notifyNode = document.createElement("div");
        notifyNode.setAttribute("id", "notify");
        parentNode?.appendChild(notifyNode);
        app.component("notify", notify);
        const mountComponent = createApp(app.component("notify"), {
            timeout: options.timeout,
            text: options.text,
            width: options.width,
            height: options.height,
          });
        mountComponent.mount(notifyNode);
        return mountComponent;
    };

    const removeElement = (element?: Element) => {
        element?.remove();
    };

    const handleTimeout = () => {
        
      };
      handleTimeout();

    // let comp = null;
    // function createComp(options) {
    //     console.log("option", options)
    //     const rootID = !options?.root ? 'body' : options.root;
    //     const div = document.createElement('div');
    //     div.classList.add('alert-component');
    //     document.querySelector(rootID).appendChild(div);
    //     app.component('notify', notify);
    //     const Component = createApp(app.component('notify'), {
    //         timeout: options.timeout,
    //         contentClass: options.contentClass,
    //         width: options.width,
    //         text: options.text,
    //         typeIcon: options.typeIcon,
    //         titleNotify: options.titleNotify,
    //         isAutoship: options.isAutoship
    //     });
    //     Component.mount(div);
    //     return Component;
    // }
    // let defaults = {
    //     text: 'hello',
    //     timeout: 6000,
    //     width: 280,
    //     contentClass: ""
    // };
    // function alertComponents(options) {
    //     const useShow = useShowLoading();
    //     if (comp) {
    //         options.active = true;
    //         nuxtApp.$bus.$on("close", () => {
    //             comp.active = false;
    //             comp.unmount();
    //             comp = null;
    //             document.querySelector(".alert-component")?.remove();
    //             useShow.isCloseNotify = false;
    //         });
    //     }
    //     else {
    //         options.active = true;
    //         let defaultOptions = Object.assign({}, { ...defaults }, { ...options });
    //         comp = createComp(defaultOptions);
    //         nuxtApp.$bus.$on("close", () => {
    //             options.active = false;
    //             if(comp){
    //                 comp.unmount();
    //             }
    //             comp = null;
    //             document.querySelector(".alert-component")?.remove();
    //             useShow.isCloseNotify = false;
    //         });
    //         nuxtApp.$bus.$on("statusChange", (isActive, wasActive) => {
    //             if (wasActive && !isActive) {
    //                 if(comp){
    //                     comp.unmount();
    //                 }
    //                 comp = null;
    //                 document.querySelector(".alert-component")?.remove();
    //             }
    //         });
    //     }
    // }
  },
};
