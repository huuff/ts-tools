{
  description = "TypeScript utils I always find myself needing";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs }:
  let
    system = "x86_64-linux";
    pkgs = import nixpkgs { inherit system; };
  in
  {
    devShell.${system} = pkgs.mkShell {
      buildInputs = with pkgs; [
        nodejs
        nodePackages.npm
      ];
    };
  };
}
