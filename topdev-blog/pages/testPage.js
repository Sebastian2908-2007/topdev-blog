import parse from 'html-react-parser';
const rawHtml = `<div id="i41q"><section class="bdg-sect"></section><div class="el-X"></div><h1></h1><h1 id="iwvg"></h1><h1 id="i5hg"></h1><h1 id="izqj"></h1><h1 id="ib7g"></h1><ul id="my-list"><li>item1</li><li>item2</li><li>item3</li></ul></div>`;
const replaceFirstTag = rawHtml.replace('<div id="i41q">','<body>');
const replaceSecondTag = replaceFirstTag.replace('</div>','</body>');
console.log(replaceSecondTag);
const TestPage = () => {
    //console.log(html);
    const html = parse(rawHtml);
    return(
        
         html  
            
    
    );
};

/*export async function getStaticProps() {
    const endJsx =  parse(rawHtml);
    const html = <BlogHtml jsx={endJsx}/>
    //console.log(html);
    return {props:{html}};
};*/
export default TestPage;