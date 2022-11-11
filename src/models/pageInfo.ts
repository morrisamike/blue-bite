import pageList from "./pageList";
import pageComponent from "./pageComponent";
import pageVariable from "./pageVariable";

interface PageInfo{
    lists:Array<pageList>,
    components:Array<pageComponent>,
    variables?:Array<pageVariable>
  
  }
  export default PageInfo;