


def sortAlphabeticaly()
arr = ['toby', 'thomas', 'jerry', 'mark', 'martin', 'martha']
result = arr.sort! { |a, b|  a <=> b}
puts result
end

puts sortAlphabeticaly
