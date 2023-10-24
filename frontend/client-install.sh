## Install All Repos ##

# Frontend
rm -rf pnpm-lock.yaml

cd ./frontend || (echo 'Cannot find backend directory' && exit)
echo 'Installing frontend project'
rm -rf node_modules
rm -rf pnpm-lock.yaml
pnpm install --shamefully-hoist || (echo 'Cannot install frontend packages' && exit)
#pnpm run link || (echo 'Cannot link frontend project packages' && exit)
npx jl install || (echo 'Cannot install frontend project' && exit)
cd ..