import  {createContext ,useContext} from 'react';

export const Themecontext =createContext({
    themomode:'light',
    darktheme: ()=>{},
    lighttheme:()=>{},
})


export const Themeprovider = Themecontext.Provider

export default function useTheme(){
    return useContext(Themecontext)
}