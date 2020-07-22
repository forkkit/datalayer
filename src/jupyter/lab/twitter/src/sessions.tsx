import React from 'react'
import ReactDOM from 'react-dom'
import { ServiceManager } from '@jupyterlab/services'
import { Message} from '@lumino/messaging'
import { INotebookTracker } from '@jupyterlab/notebook'
import { Widget } from '@lumino/widgets'
import { JupyterFrontEnd } from '@jupyterlab/application'
import { ISignal, Signal } from '@lumino/signaling'
import {Provider}  from 'react-redux'
import ReduxToastr from 'react-redux-toastr'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {reducer as toastrReducer} from 'react-redux-toastr'
import TabPanel from './panel'
import '../style/index.css'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import thunk from 'redux-thunk';

const reducers = {
  // ... other reducers ...
  toastr: toastrReducer // <- Mounted at toastr.
}
const reducer = combineReducers(reducers)
const store = createStore(reducer, applyMiddleware(thunk))

/**
 * A class that exposes the twitter-plugin sessions.
 */
export class DatalayerSessions extends Widget {
  component: any

  /**
   * Construct a new running widget.
   */
  public constructor(app: JupyterFrontEnd, notebookTracker: INotebookTracker, options: DatalayerSessions.IOptions, diff_function: any) {
    super({
      node: (options.renderer || DatalayerSessions.defaultRenderer).createNode()
    });
    this.addClass('jp-Twitter');
    const element = <Provider store={store}>
      <div>
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="top-left"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar/>
        <TwitterSessionNode app={app} diff={diff_function} notebookTracker={notebookTracker}/>
      </div>
    </Provider>    
    this.component = ReactDOM.render(element, this.node);
//    this.component.refresh();
  }

  /**
   * override widget's show() to update content everytime Twitter widget shows up.
   */
  show(): void {
    super.show();
//    this.component.refresh();
  }

  /**
   * The renderer used by the running sessions widget.
   */
  get renderer(): DatalayerSessions.IRenderer | null {
    return this._renderer;
  }

  /**
   * A signal emitted when the directory listing is refreshed.
   */
  get refreshed(): ISignal<this, void> {
    return this._refreshed;
  }

  /**
   * Get the input text node.
   */
  get inputNode(): HTMLInputElement {
    return this.node.getElementsByTagName('input')[0] as HTMLInputElement;
  }

  /**
   * Dispose of the resources used by the widget.
   */
  dispose(): void {
//    this._manager = null;
//    this._runningSessions = null;
//    this._runningTerminals = null;
    this._renderer = null;
    clearTimeout(this._refreshId);
    super.dispose();
  }

  /**
   * Handle the DOM events for the widget.
   *
   * @param event - The DOM event sent to the widget.
   *
   * #### Notes
   * This method implements the DOM `EventListener` interface and is
   * called in response to events on the widget's DOM nodes. It should
   * not be called directly by user code.
   */
  handleEvent(event: Event): void {
    switch (event.type) {
      case 'change':
        this._evtChange(event as MouseEvent);
      case 'click':
        this._evtClick(event as MouseEvent);
        break;
      case 'dblclick':
        this._evtDblClick(event as MouseEvent);
        break;
      default:
        break;
    }
  }

  /**
   * A message handler invoked on an `'after-attach'` message.
   */
  protected onAfterAttach(msg: Message): void {
    this.node.addEventListener('change', this);
    this.node.addEventListener('click', this);
    this.node.addEventListener('dblclick', this);
  }

  /**
   * A message handler invoked on a `'before-detach'` message.
   */
  protected onBeforeDetach(msg: Message): void {
    this.node.addEventListener('change', this);
    this.node.removeEventListener('click', this);
    this.node.removeEventListener('dblclick', this);
  }

  /**
   * Handle the `'click'` event for the widget.
   *
   * #### Notes
   * This listener is attached to the document node.
   */
  private _evtChange(event: MouseEvent): void {
  }
  /**
   * Handle the `'click'` event for the widget.
   *
   * #### Notes
   * This listener is attached to the document node.
   */
  private _evtClick(event: MouseEvent): void {
  }
  /**
   * Handle the `'dblclick'` event for the widget.
   */
  private _evtDblClick(event: MouseEvent): void {
  }

//  private _manager: ServiceManager.IManager = null;
  private _renderer: DatalayerSessions.IRenderer | null = null;
//  private _runningSessions: Session.IModel[] = [];
//  private _runningTerminals: TerminalSession.IModel[] = [];
  private _refreshId = -1;
  private _refreshed = new Signal<this, void>(this);
  //private _lastRefresh = -1;
  //private _requested = false;
}

/**
 * The namespace for the `RunningSessions` class statics.
 */
export namespace DatalayerSessions {
  /**
   * An options object for creating a running sessions widget.
   */
  export
  interface IOptions {
    /**
     * A service manager instance.
     */
    manager: ServiceManager.IManager;

    /**
     * The renderer for the running sessions widget.
     *
     * The default is a shared renderer instance.
     */
    renderer?: IRenderer;
  }
  /**
   * A renderer for use with a running sessions widget.
   */
  export interface IRenderer {
    createNode(): HTMLElement;
  }
  /**
   * The default implementation of `IRenderer`.
   */
  export class Renderer implements IRenderer {
    createNode(): HTMLElement {
      let node = document.createElement('div');
      node.id = 'TwitterSession-root';
      return node;
    }
  }
  /**
   * The default `Renderer` instance.
   */
  export const defaultRenderer = new Renderer();
}

namespace TwitterSessionNode {
  export interface IState {
    current_fb_path:string;
    top_repo_path: string;
    show: boolean;
    branches: any;
    current_branch:string;
    disable_switch_branch:boolean;
    pull_enable:boolean;
    push_enable:boolean;
    past_commits: any;
    in_new_repo: boolean;
    show_index: number;
    staged_files: any;
    unstaged_files: any;
    untracked_files: any;
  }
  export interface IProps {
    app: JupyterFrontEnd
    diff: any
    notebookTracker: INotebookTracker
  }
}

async function refresh(){
/*
  try {
    let ll = this.props.app.shell.widgets('left');
    let fb = ll.next();
    while(fb.id!='filebrowser') {
      fb = ll.next();
    }
    let twitter_temp = new Twitter();
    let api_result = await twitter_temp.api((fb as any).model.path);    
    if (api_result.code==0) {
      let api_showtoplevel = (api_result as TwitterAPI).data.showtoplevel;
      //retrieve twitter_branch
      let api_branch = (api_result as TwitterAPI).data.branch;
      let current_branch = 'master';
      if(api_branch.code==0){
        let data_json = (api_branch as TwitterBranchResult).branches;
        for (var i=0; i<data_json.length; i++){
          if(data_json[i].current[0]){
            current_branch=data_json[i].name;
            break;
          }
        }
      }
      // retrieve twitter_log
      let api_log = (api_result as TwitterAPI).data.log;
      let past_commits = [];
      if(api_log.code==0){
        past_commits = (api_log as TwitterLogResult).commits;
      }
      //retrieve twitter_status
      let staged = [], unstaged = [], untracked = [];
  //      let SF = 0, USF = 0, UTF = 0
      let Changes = 0;
      let disable_switch_branch = true;
      let pull_enable = false;
      let push_enable = true;
      let api_status = (api_result as TwitterAPI).data.status;
      if (api_status.code==0) {
        let data_json = (api_status as TwitterStatusResult).files;
        for (var i=0; i<data_json.length; i++){
          if (data_json[i].x!="?"&&data_json[i].x!="!"){
            Changes++;
          }          
          if (data_json[i].x=="?"&&data_json[i].y=="?"){
            untracked.push(data_json[i]);
  //            UTF++;
          }
          else {
            if(data_json[i].x!=" "&&data_json[i].y!="D"){
              staged.push(data_json[i]);
  //              SF++;
            }
            if(data_json[i].y!=" "){
              unstaged.push(data_json[i]);
  //              USF++;
            }
          }
        }  
        if(Changes == 0){
        // since there are no uncommitted changes, enable switch branch button 
          disable_switch_branch = false;
          pull_enable = true;
        }
      }
      if (past_commits.length==0) {
        disable_switch_branch = true;
        push_enable = false;
      }
      //determine if in the same repo as previously, if not, display the CUR;
      let in_new_repo= this.state.top_repo_path!==(api_showtoplevel as TwitterShowTopLevelResult).top_repo_path;
      let show_index = this.state.show_index;  
      if(in_new_repo){
        show_index = -1;
      }     
      this.setState({current_fb_path:(fb as any).model.path, top_repo_path: (api_showtoplevel as TwitterShowTopLevelResult).top_repo_path, show:true, 
        branches: (api_branch as TwitterBranchResult).branches, current_branch: current_branch, disable_switch_branch: disable_switch_branch, pull_enable:pull_enable, push_enable:push_enable,
        past_commits: past_commits, in_new_repo: in_new_repo, show_index:show_index,
        staged_files: staged, unstaged_files: unstaged, untracked_files: untracked});
    }
    else {
      this.setState({current_fb_path: (fb as any).model.path, top_repo_path: '', show:false,  pull_enable:false, push_enable:false});
    }
  }
  catch(err){
    console.log("Can not conne=ct to the server endpoint...")
  }
*/
}

class TwitterSessionNode extends React.Component<TwitterSessionNode.IProps, TwitterSessionNode.IState>{
  interval:any;
  refresh:any;

  constructor(props: TwitterSessionNode.IProps) {
    super(props);
    this.state = {current_fb_path: '', top_repo_path: '', show:false, branches:[], current_branch:'', disable_switch_branch:true, pull_enable:false, push_enable:false, past_commits:[], in_new_repo:true, show_index:-1, staged_files:[], unstaged_files:[], untracked_files:[]}
    this.refresh = refresh.bind(this);
    this.show_current_work = this.show_current_work.bind(this);
  }
  
  componentDidMount() {
    this.interval = setInterval(() => this.refresh(), 50000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <TabPanel notebookTracker={this.props.notebookTracker}/>
    )
  }

  private show_current_work(show_value:number) {
    this.setState({show_index: show_value});
  }
  
}
