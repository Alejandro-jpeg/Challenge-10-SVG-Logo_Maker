const generatedShape = require('./triangle');



describe('triangle', ()=>{
    it('text content should not be longer than 3 chars', ()=>{
        const textChars = 3;
        const triangle = new generatedShape('lol', 'white', 'triangle', 'black')
        expect(triangle.text.length).toEqual(textChars);
    })
})