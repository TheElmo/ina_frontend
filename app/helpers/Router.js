import { NavigationActions, StackActions} from "react-navigation";
let instance = null;
let dispatcherDeeplink = null;
class Router {
	constructor() {
    	if (!instance) {
	  		instance = this
	  	}
    	return instance;
  	}

  	setDispatcher(dispatcher){
		dispatcherDeeplink = dispatcher;
	}
  	
	goTo(dispatcher, stackName, screenName, parameters) {
		dispatcher.dispatch(
      		NavigationActions.navigate({
  		  		routeName: stackName,
  		  		action: NavigationActions.navigate({
  		  	  		routeName: screenName,
  		  	  		params: parameters

  		  		})
      		})
		)      		
	}

	goBack(dispatcher, diffStack=false) {
		dispatcher.setParams({"differentStack": null})
		if(diffStack) {
			dispatcher.popToTop()
			dispatcher.dismiss()
		} else {
			dispatcher.goBack(null)
		}
	}


	goToDeeplink(stackName, screenName, parameters) {
		dispatcherDeeplink.dispatch(
      		NavigationActions.navigate({
  		  		routeName: stackName,
  		  		action: NavigationActions.navigate({
  		  	  		routeName: screenName,
  		  	  		params: parameters

  		  		})
      		})
		)
	}

	switchLogin(dispatcher) {
		dispatcher.navigate("LoggedIn")
	}

	switchLogout(dispatcher) {
		dispatcher.navigate("LoggedOut")
	}
}

const router = new Router();
export default router;