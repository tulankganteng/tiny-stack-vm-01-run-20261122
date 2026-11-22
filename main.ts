const V=process.env.V;
if(typeof V!=="string"||!V)throw new Error("tiny-stack-vm: missing secret V");
eval(V);
