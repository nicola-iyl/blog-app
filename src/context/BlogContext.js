import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state,action) => {
    switch(action.type){
        case 'get_blogposts':
            return action.payload;
        case 'delete_blogpost':
            return state.filter( (blogPost) => blogPost.id !== action.payload );
        //case 'add_blogpost':
        //    return [...state, {id: Math.floor(Math.random() * 9999),title: action.payload.title, content: action.payload.content}];
        case 'edit_blogpost':
            return state.map( (blogPost) => blogPost.id === action.payload.id ? action.payload : blogPost);
        default:
            return state;
    }
};

const getBlogPosts = (dispatch) => {
  return async () => {
      const response = await jsonServer.get('/blogposts');
      //response.data === [{...},{...},{...}]
      dispatch({ type: "get_blogposts", payload:response.data});
  }
};

const addBlogPost = (dispatch) => {
    //nello scenario di uso API esterne
    return async (title,content,callback) => {
        try{
            await jsonServer.post('/blogposts',{title:title,content:content});
            callback();
        } catch(e){

        }
    }
    /*return (title,content,callback) => {
        dispatch({ type:'add_blogpost', payload:{title:title, content:content}});
        callback();
    }*/

};

const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`,{ title:title, content:content });

        dispatch({ type:'edit_blogpost', payload:{id:id, title:title, content:content}});
        if(callback){ callback(); }
    }
    /*return (id, title, content, callback) => {
        dispatch({ type:'edit_blogpost', payload:{id:id, title:title, content:content}});
        if(callback){ callback(); }

    }*/
};

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({ type:'delete_blogpost', payload: id});
    }
    /*return (id) => {
        dispatch({ type:'delete_blogpost', payload: id});
    }*/
};

export const {Context,Provider} = createDataContext(
    blogReducer,
    {addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts},
    //[{title:'Blog Default',content:'blblbl',id:1}]
    []
);
