app.use(cors());

app.get('/',(req, res)=>{
    res.json([
        {
            id: 1,
            name: 'John'
        },
        {
            id: 2,
            name: 'Doe'
        }
    ])

});

app.listen(4000,()=>{
    console.log('Server started on port 4000');
})