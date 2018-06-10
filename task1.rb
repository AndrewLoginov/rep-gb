n=ARGV[0].to_i
e=ARGV[1].to_i
sum=0
for i in 1..n
    h=i**e
    sum=sum+h
end
puts sum