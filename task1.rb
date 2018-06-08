n=ARGV[0]
e=ARGV[1]
sum=0
for i in 1..n
    h=i**e
    sum=sum+h
end
puts sum