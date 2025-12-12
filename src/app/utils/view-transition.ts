export const startViewTransition = (callback: () => void) => {
    if(!document.startViewTransition) {
        console.log('not supported');
        callback();
        
    }else {
        document.startViewTransition(callback)
    }
}